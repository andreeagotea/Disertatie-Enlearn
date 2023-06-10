import CssProperties from '../../utils/entities/cssProperties'
import Item from '../../utils/entities/item'
import getCodeceptSessionInstance from '../CodeceptSession'

class ItemDAO {
  saveItem(item: Item) {
    getCodeceptSessionInstance().saveObjectInSession('item', item)
  }

  removeItem(name: string) {
    const itemList = this.getAllItems()
    const index = itemList.findIndex((item) => item.getName() === name)
    getCodeceptSessionInstance().removeObjectFromSession('item', index)
    getCodeceptSessionInstance().updateSession()
    this.removeItemIfChild(name)
  }

  removeItemIfChild(name: string) {
    const itemList = this.getAllItems()
    itemList.map((item) => {
      const children = item.getChildren()
      const index = children.indexOf(name)
      if (index > -1) {
        item.setChildren(children.splice(index - 1, 1))
      }
    })
  }

  getAllItems(): Item[] {
    return getCodeceptSessionInstance().getObjectFromSession('item') as Item[]
  }

  getItemByName(name: string): Item {
    const itemList = this.getAllItems()
    const item = itemList.find((item: Item) => item.getName() === name)

    return item as Item
  }

  getItemCssPropertiesForStage(itemName: string, stagesize: string) {
    const cssPropertiesList = this.getItemByName(itemName).getCssProperties()
    const cssProperties = cssPropertiesList.find((elem: CssProperties) => {
      return elem.getName() === stagesize
    })
    return cssProperties === undefined ? new CssProperties() : cssProperties
  }
}

let itemDAO: ItemDAO | undefined = undefined

const getItemDAO = () => {
  if (!itemDAO) {
    itemDAO = new ItemDAO()
  }
  return itemDAO
}

export default getItemDAO
