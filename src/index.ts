import axios from 'axios'
import * as fs from 'fs'
import * as mkdirp from 'mkdirp'
import * as path from 'path'
import * as utils from './utils'

const spider = (url: string, callback: (err: Error, filename: string, downloaded: boolean) => void) => {
  const filename = utils.urlToFilename(url)
  fs.exists(filename, exists => {
    if (!exists) {
      console.log(`Downloading ${url}`)
    } else {
      callback(null, filename, false)
    }
  })
}

const mainCallback = (err, filename, downloaded) => {
  if (err) {
    console.error(err)
  } else if (downloaded) {
    console.log(`Completed the download of "${filename}"`)
  } else {
    console.log(`"${filename}" was already downloaded/`)
  }
}

spider(process.argv[2], mainCallback)
