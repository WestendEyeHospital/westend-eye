import React from 'react'
import PropTypes from 'prop-types'
import { DirectionsPageTemplate } from '../../templates/directions-page'

const DirectionsPagePreview = ({ entry, widgetFor }) => (
  <DirectionsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

DirectionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DirectionsPagePreview
