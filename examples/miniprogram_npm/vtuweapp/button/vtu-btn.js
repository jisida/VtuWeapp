import { VtuComponent } from '../assets/package/component';
import { behavior_button} from '../assets/behaviors/basic';
VtuComponent({
  behavior:  behavior_button() ,
  /**
   * 组件的属性列表
   */
  properties: {},

  builtBehaviors: ['wx://form-field'],
})
