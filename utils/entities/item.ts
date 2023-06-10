import CssProperties from './cssProperties'

class Item {
  private id: string
  private name: string
  private type: string
  private content: string
  private children: string[]
  private trace: string[]
  private customClass: CssProperties
  private cssProperties: CssProperties[]

  constructor() {
    this.id = ''
    this.name = ''
    this.type = ''
    this.children = new Array<string>()
    this.trace = new Array<string>()
    this.cssProperties = new Array<CssProperties>()
    this.customClass = new CssProperties()
  }

  public getId(): string {
    return this.id
  }

  public setId(id: string): void {
    this.id = id
  }

  public getName(): string {
    return this.name
  }

  public setName(name: string): void {
    this.name = name
  }

  public getType(): string {
    return this.type
  }

  public setType(type: string): void {
    this.type = type
  }

  public getContent(): string {
    return this.content
  }

  public setContent(content: string): void {
    this.content = content
  }

  public getChildren(): string[] {
    return this.children
  }

  public setChildren(children: string[]): void {
    this.children = children
  }

  public getTrace(): string[] {
    return this.trace
  }

  public setTrace(trace: string[]): void {
    this.trace = trace
  }

  public getCssProperties(): CssProperties[] {
    return this.cssProperties
  }

  public setCssProperties(cssProperties: CssProperties[]): void {
    this.cssProperties = cssProperties
  }

  public getCustomClassCssProperties(): CssProperties {
    return this.customClass
  }

  public setCustomClass(cssProperties: CssProperties): void {
    this.customClass = cssProperties
  }

  public getCustomClassName(): string {
    return this.customClass.getName()
  }

  public setCustomClassName(name: string): void {
    this.customClass.setName(name)
  }
}

export default Item
