import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import DirectionsPagePreview from './preview-templates/DirectionsPagePreview'
import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import SpecialitiesPagePreview from './preview-templates/SpecialitiesPagePreview'
import TeamPagePreview from './preview-templates/TeamPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('directions', DirectionsPagePreview)
CMS.registerPreviewTemplate('gallery', GalleryPagePreview)
CMS.registerPreviewTemplate('specialities', SpecialitiesPagePreview)
CMS.registerPreviewTemplate('team', TeamPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
