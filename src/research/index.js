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
import materialUIWeb from './materialUIWeb.json5'
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
  materialUIWeb,
  semantic,
  stardust,
  w3,
]

export const sourceNames = _.map(sources, 'name')
export const sourcesCount = sources.length
export const sourceComponentConceptMap = sources.reduce((acc, src) => {
  acc[src.name] = {}

  _.forEach(src.components, comp => {
    acc[src.name][comp.name] = {}

    _.forEach(comp.concepts, con => {
      acc[src.name][comp.name][con.name] = con
    })
  })

  return acc
}, {})

export const doesSourceHaveComponentConcept = (sourceName, componentName, conceptName) => {
  return _.has(sourceComponentConceptMap, [sourceName, componentName, conceptName])
}
export const doesSourceHaveComponentAnatomy = (sourceName, componentName, conceptName) => {
  return _.has(sourceComponentConceptMap, [sourceName, componentName, conceptName])
}

// Components
export const components = _.flatMap(sources, 'components')
export const componentNames = _.map(components, 'name')
export const componentNamesUnique = _.uniq(componentNames)
export const componentsByName = _.groupBy(components, 'name')

// Anatomies
export const anatomiesByComponent = _.mapValues(componentsByName, components =>
  _.compact(_.uniqBy(_.flatMap(components, 'anatomy'), 'name')),
)

// Concepts
export const concepts = _.compact(_.flatMap(components, 'concepts'))
export const conceptNames = _.uniq(_.map(concepts, 'name'))
export const conceptsByName = _.groupBy(concepts, 'name')
export const conceptsByComponent = components.reduce((acc, next) => {
  acc[next.name] = acc[next.name] || []

  _.forEach(next.concepts, concept => {
    if (!_.find(acc[next.name], { name: concept.name })) {
      acc[next.name].push(concept)
    }
  })
  acc[next.name] = _.sortBy(acc[next.name], 'name')
  return acc
}, {})

// Images
export const getImagesForComponentConcept = (componentName, conceptName) => {
  return components
    .reduce((acc, { name, concepts }) => {
      if (name === componentName) {
        return acc.concat(_.map(_.filter(concepts, { name: conceptName }), 'image'))
      }

      return acc
    }, [])
    .filter(Boolean)
}
