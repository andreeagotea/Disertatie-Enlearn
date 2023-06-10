class CodeceptSession {
  sessionObjects: Map<string, Array<unknown>> = new Map()
  sessionObject: Map<string, unknown> = new Map()

  putOnSession(objectType: string, object: unknown) {
    this.sessionObject.set(objectType, object)
  }

  getFromSession(objectType: string): unknown {
    return this.sessionObject.get(objectType)
  }

  saveObjectInSession(objectType: string, object: unknown) {
    if (!this.sessionObjects.has(objectType)) {
      this.sessionObjects.set(objectType, [])
    }
    this.sessionObjects.get(objectType)?.push(object)
  }

  getObjectFromSession(objectType: string): unknown[] {
    const objects = this.sessionObjects.get(objectType)
    return objects || []
  }

  removeObjectFromSession(objectType: string, index: number) {
    this.sessionObjects.get(objectType)?.splice(index, 1)
  }

  updateSession() {
    return codeceptSessionInstance
  }

  clearMap() {
    this.sessionObjects.clear()
  }
}

let codeceptSessionInstance: CodeceptSession | undefined = undefined

const getCodeceptSessionInstance = () => {
  if (!codeceptSessionInstance) {
    codeceptSessionInstance = new CodeceptSession()
  }
  return codeceptSessionInstance
}

export default getCodeceptSessionInstance
