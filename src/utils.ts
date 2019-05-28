import { parse } from 'url'
import * as slug from 'slug'
import * as path from 'path'

export const urlToFilename = (url: string) => {
  const parsed = parse(url)
  const urlPath = parsed.path.split('/')
    .filter(component => component !== '')
    .map(component => slug(component, { remove: null }))
    .join('/')

  let filename = path.join(parsed.hostname, urlPath)
  if (!path.extname(filename).match(/htm/)) {
    filename += '.html'
  }

  return filename
}
