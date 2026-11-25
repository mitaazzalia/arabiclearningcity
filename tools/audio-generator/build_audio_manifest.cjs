#!/usr/bin/env node
/** Build the MP3 list from the real lesson data used by the website. */
const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')

const projectRoot = path.resolve(__dirname, '..', '..')
const configPath = path.join(__dirname, 'audio_texts.json')

// Load the project's TypeScript data modules without adding a runtime dependency.
require.extensions['.ts'] = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8')
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: filename,
  }).outputText
  module._compile(output, filename)
}

function uniqueLessons(lessons) {
  const byId = new Map()
  for (const lesson of lessons) byId.set(lesson.id, lesson)
  return [...byId.values()]
}

function main() {
  const { localLessons } = require(path.join(projectRoot, 'src/data/lessons.ts'))
  const { extraLessons } = require(path.join(projectRoot, 'src/data/cityData.ts'))
  const { additionalCityLessons } = require(path.join(projectRoot, 'src/data/moreCityLessons.ts'))
  const { expandedCityLessons } = require(path.join(projectRoot, 'src/data/expandedCityLessons.ts'))
  const { enrichLessons } = require(path.join(projectRoot, 'src/data/lessonEnrichment.ts'))

  // Keep the same local lesson sources that App.tsx combines.
  const lessons = uniqueLessons(enrichLessons([
    ...localLessons,
    ...extraLessons,
    ...additionalCityLessons,
    ...expandedCityLessons,
  ]))

  const items = []
  const missing = []
  for (const lesson of lessons) {
    for (const grade of ['SMP', 'SMA']) {
      const content = lesson[grade.toLowerCase()]
      const text = String(content?.audioText || '').trim()
      if (!text) {
        missing.push(`${lesson.id}/${grade}`)
        continue
      }
      items.push({
        filename: `${lesson.id}_${grade.toLowerCase()}_istima.mp3`,
        lessonId: lesson.id,
        grade,
        kind: 'lesson-istima-and-quiz',
        text,
        slow: false,
      })
    }
  }

  fs.writeFileSync(configPath, `${JSON.stringify(items, null, 2)}\n`, 'utf8')
  console.log(`Manifest audio dibuat: ${items.length} file MP3 untuk ${lessons.length} lokasi (SMP dan SMA).`)
  console.log('Setiap soal istima pada lokasi yang sama akan menggunakan audio materi yang sama.')
  if (missing.length) {
    console.warn(`AudioText kosong (${missing.length}): ${missing.join(', ')}`)
  }
}

try {
  main()
} catch (error) {
  console.error('Gagal menyusun manifest audio dari data website.')
  console.error(error && error.stack ? error.stack : error)
  process.exit(1)
}
