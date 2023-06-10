class CssProperties {
  private name: string

  private width: string
  private height: string

  private flex: string

  private alignSelf: string

  private position: string

  private top: string
  private right: string
  private left: string
  private bottom: string

  private margin: string
  private marginTop: string
  private marginRight: string
  private marginBottom: string
  private marginLeft: string

  private padding: string
  private paddingTop: string
  private paddingRight: string
  private paddingBottom: string
  private paddingLeft: string

  private backgroundColor: string
  private backgroundImage: string

  private fontType: string
  private displayType: string

  private listStyleType: string
  private listStylePosition: string

  private fontFamily: string
  private fontWeight: string
  private fontSize: string
  private lineHeight: string
  private letterSpacing: string

  private textTransform: string
  private textDecoration: string
  private textAlign: string

  private color: string

  private borderWidth: string
  private borderStyle: string
  private borderColor: string

  private borderTopWidth: string
  private borderRightWidth: string
  private borderBottomWidth: string
  private borderLeftWidth: string

  private opacity: string

  private borderRadius: string
  private borderTopLeftRadius: string
  private borderTopRightRadius: string
  private borderBottomLeftRadius: string
  private borderBottomRightRadius: string

  private boxShadow: string

  private flexDirection: string
  private alignItems: string
  private justifyContent: string

  private zIndex: string

  public getWidth(): string {
    return this.width
  }

  public setWidth(width: string): void {
    this.width = width
  }

  public getHeight(): string {
    return this.height
  }

  public setHeight(sizeHeight: string): void {
    this.height = sizeHeight
  }

  public getFlex(): string {
    return this.flex
  }

  public setFlex(value: string): void {
    this.flex = value
  }

  public getPositionAlignment(): string {
    return this.alignSelf
  }

  public setPositionAlignment(value: string) {
    this.alignSelf = value
  }

  public getPosition(): string {
    return this.position
  }

  public setPosition(value: string) {
    this.position = value
  }

  public getTop(): string {
    return this.top
  }

  public setTop(value: string) {
    this.top = value
  }

  public getRight(): string {
    return this.right
  }

  public setRight(value: string) {
    this.right = value
  }
  public getBottom(): string {
    return this.bottom
  }

  public setBottom(value: string) {
    this.bottom = value
  }

  public getLeft(): string {
    return this.left
  }

  public setLeft(value: string) {
    this.left = value
  }

  public getListStyleType(): string {
    return this.listStyleType
  }

  public setListStyleType(value: string) {
    this.listStyleType = value
  }

  public getListStylePosition(): string {
    return this.listStylePosition
  }

  public setListStylePosition(value: string) {
    this.listStylePosition = value
  }

  public getFontFamily(): string {
    return this.fontFamily
  }

  public setFontFamily(value: string) {
    this.fontFamily = value
  }

  public getLineHeight(): string {
    return this.lineHeight
  }

  public setLineHeight(value: string) {
    this.lineHeight = value
  }

  public getLetterSpacing(): string {
    return this.letterSpacing
  }

  public setLetterSpacing(value: string) {
    this.letterSpacing = value
  }

  public getTextTransform(): string {
    return this.textTransform
  }

  public setTextTransform(value: string) {
    this.textTransform = value
  }

  public getTextDecoration(): string {
    return this.textDecoration
  }

  public setTextDecoration(value: string) {
    this.textDecoration = value
  }

  public getTextAlign(): string {
    return this.textAlign
  }

  public setTextAlign(value: string) {
    this.textAlign = value
  }

  public getColor(): string {
    return this.color
  }

  public setColor(value: string) {
    this.color = value
  }

  public getBorderTopWidth(): string {
    return this.borderTopWidth
  }

  public setBorderTopWidth(value: string) {
    this.borderTopWidth = value
  }

  public getBorderRightWidth(): string {
    return this.borderRightWidth
  }

  public setBorderRightWidth(value: string) {
    this.borderRightWidth = value
  }

  public getBorderBottomWidth(): string {
    return this.borderBottomWidth
  }

  public setBorderBottomWidth(value: string) {
    this.borderBottomWidth = value
  }

  public getBorderLeftWidth(): string {
    return this.borderLeftWidth
  }

  public setBorderLeftWidth(value: string) {
    this.borderLeftWidth = value
  }

  public getBorderTopLeftRadius(): string {
    return this.borderTopLeftRadius
  }

  public setBorderTopLeftRadius(value: string) {
    this.borderTopLeftRadius = value
  }

  public getBorderTopRightRadius(): string {
    return this.borderTopRightRadius
  }

  public setBorderTopRightRadius(value: string) {
    this.borderTopRightRadius = value
  }

  public getBorderBottomLeftRadius(): string {
    return this.borderBottomLeftRadius
  }

  public setBorderBottomLeftRadius(value: string) {
    this.borderBottomLeftRadius = value
  }

  public getBorderBottomRightRadius(): string {
    return this.borderBottomRightRadius
  }

  public setBorderBottomRightRadius(value: string) {
    this.borderBottomRightRadius = value
  }

  public getRadius(): string {
    return this.borderRadius
  }

  public setRadius(value: string) {
    this.borderRadius = value
  }

  public getVisibility(): string {
    return this.opacity
  }

  public setVisibility(value: string) {
    this.opacity = value
  }

  public getMargin(): string {
    return this.margin
  }

  public setMargin(value: string) {
    this.margin = value
  }

  public getPadding(): string {
    return this.padding
  }

  public setPadding(value: string) {
    this.padding = value
  }

  public getBorderColor(): string {
    return this.borderColor
  }

  public setBorderColor(value: string) {
    this.borderColor = value
  }

  public getBorderWidth(): string {
    return this.borderWidth
  }

  public setBorderWidth(value: string) {
    this.borderWidth = value
  }

  public getBorderStyle(): string {
    return this.borderStyle
  }

  public setBorderStyle(value: string) {
    this.borderStyle = value
  }

  public getPaddingTop(): string {
    return this.paddingTop
  }
  public setPaddingTop(value: string) {
    this.paddingTop = value
  }

  public getPaddingRight(): string {
    return this.paddingRight
  }
  public setPaddingRight(value: string) {
    this.paddingRight = value
  }

  public getPaddingBottom(): string {
    return this.paddingBottom
  }
  public setPaddingBottom(value: string) {
    this.paddingBottom = value
  }

  public getPaddingLeft(): string {
    return this.paddingLeft
  }
  public setPaddingLeft(value: string) {
    this.paddingLeft = value
  }

  public getMarginRight(): string {
    return this.marginRight
  }
  public setMarginRight(value: string) {
    this.marginRight = value
  }

  public getMarginTop(): string {
    return this.marginTop
  }
  public setMarginTop(value: string) {
    this.marginTop = value
  }

  public getMarginBottom(): string {
    return this.marginBottom
  }
  public setMarginBottom(value: string) {
    this.marginBottom = value
  }

  public getMarginLeft(): string {
    return this.marginLeft
  }

  public setMarginLeft(value: string) {
    this.marginLeft = value
  }

  public getName(): string {
    return this.name
  }

  public setName(name: string): void {
    this.name = name
  }

  public getBackgroundColor(): string {
    return this.backgroundColor
  }

  public setBackgroundColor(backgroundColor: string): void {
    this.backgroundColor = backgroundColor
  }

  public getBackgroundImageSource(): string {
    return this.backgroundImage
  }

  public setBackgroundImageSource(backgroundImageSource: string): void {
    this.backgroundImage = backgroundImageSource
  }

  public getFontType(): string {
    return this.fontType
  }

  public setFontType(fontType: string): void {
    this.fontType = fontType
  }

  public getFontWeight(): string {
    return this.fontWeight
  }

  public setFontWeight(fontWeight: string): void {
    this.fontWeight = fontWeight
  }

  public getFontSize(): string {
    return this.fontSize
  }

  public setfontSize(value: string) {
    this.fontSize = value
  }

  public getBoxShadow(): string {
    return this.boxShadow
  }

  public setBoxShadow(value: string) {
    this.boxShadow = value
  }

  public getAlignItems(): string {
    return this.alignItems
  }

  public setAlignItems(value: string) {
    this.alignItems = value
  }

  public getJustifyContent(): string {
    return this.justifyContent
  }

  public setJustifyContent(value: string) {
    this.justifyContent = value
  }

  public getFlexDirection(): string {
    return this.flexDirection
  }

  public setFlexDirection(value: string) {
    this.flexDirection = value
  }

  public getZindex(): string {
    return this.zIndex
  }

  public setZindex(value: string) {
    this.zIndex = value
  }

  public getDisplayType(): string {
    return this.displayType
  }

  public setDisplayType(displayType: string): void {
    this.displayType = displayType
  }
}

export default CssProperties
