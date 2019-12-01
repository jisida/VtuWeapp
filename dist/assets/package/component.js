import { basic } from '../behaviors/basic';
function VtuComponent(vtuOptions = {}) {
  Object.assign(vtuOptions, {
    options: {
      multipleSlots: true,
      styleIsolation: "apply-shared"
    },
    externalClasses:  ['v-class'].concat(vtuOptions.externalClasses || [])
  })

  if (vtuOptions.behaviors && vtuOptions.behaviors.length > 0) {
    let behaviors = []
    vtuOptions.behaviors.forEach(item => {
      let behavior_name = item.name
      let behavior_item = item.behavior
      if (behavior_item.properties) {
        let properties = {}
        for(let prop in behavior_item.properties) {
          properties[behavior_name + '_' + prop] = behavior_item.properties[prop]
        }
        behavior_item.properties = properties
      }
      behaviors.push(Behavior(behavior_item))
      vtuOptions.behaviors = behaviors
    })
  }

  if(!vtuOptions.behaviors) vtuOptions.behaviors = []
  // 基础混入对象
  vtuOptions.behaviors.push(Behavior(basic()))
  // 当前组件混入对象
  if (vtuOptions.behavior) {
    vtuOptions.behaviors.push(Behavior(vtuOptions.behavior))
  }
  // 当前组件混入对象
  if (vtuOptions.builtBehaviors) {
    vtuOptions.behaviors.push(vtuOptions.builtBehaviors)
  }

  Component(vtuOptions);
}
export { VtuComponent };
