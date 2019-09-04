import _ from 'lodash'

import antd from './antd.json5'
import atlassian from './atlassian.json5'
import auth0 from './auth0.json5'
import bootstrap from './bootstrap.json5'
import carbon from './carbon.json5'
import evergreen from './evergreen.json5'
import fabric from './fabric.json5'
import fast from './fast.json5'
import lightning from './lightning.json5'
import material from './material.json5'
import semantic from './semantic.json5'
import stardust from './stardust.json5'
import w3 from './w3.json5'

// Sources
export const sources = [
  antd,
  atlassian,
  auth0,
  bootstrap,
  carbon,
  evergreen,
  fabric,
  fast,
  lightning,
  material,
  semantic,
  stardust,
  w3,
].map(source => ({
  ...source,
  components: source.components.map(component => ({
    ...component,
    source: source.name,
    openuiName: component.openuiName || component.name,
    concepts: _.map(component.concepts, concept => ({
      ...concept,
      source: source.name,
      component: component.openuiName || component.name,
      openuiName: concept.openuiName || concept.name,
    })),
  })),
}))

export const sourceNames = _.map(sources, 'name')
export const sourcesCount = sources.length
export const sourceComponentConceptMap = sources.reduce((acc, src) => {
  acc[src.name] = {}

  _.forEach(src.components, comp => {
    acc[src.name][comp.openuiName] = {}

    _.forEach(comp.concepts, con => {
      acc[src.name][comp.openuiName][con.openuiName] = con
    })
  })

  return acc
}, {})

// Components
export const components = _.flatMap(sources, 'components')
export const componentNames = _.map(components, 'name')
export const componentsByOpenuiName = _.groupBy(components, 'openuiName')

// Anatomies
export const anatomiesByComponent = _.mapValues(componentsByOpenuiName, components =>
  _.compact(_.uniqBy(_.flatMap(components, 'anatomy'), 'name')),
)
// Concepts
export const concepts = _.compact(_.flatMap(components, 'concepts'))

export const conceptsByComponent = _.mapValues(_.groupBy(concepts, 'component'), concepts =>
  _.groupBy(concepts, 'openuiName'),
)

export const getSourcesWithConcept = (componentOpenuiName, conceptOpenuiName) => {
  return _.map(
    _.get(conceptsByComponent, [componentOpenuiName, conceptOpenuiName]),
    concept => concept.source,
  )
}

// Images
export const getImagesForComponentConcept = (componentOpenuiName, conceptOpenuiName) => {
  return _.compact(
    _.map(_.get(conceptsByComponent, [componentOpenuiName, conceptOpenuiName]), concept =>
      _.get(concept, 'image'),
    ),
  )
}
