

class Session {
  sessionObject: Map<string, unknown> = new Map();

  putOnSession(objectType: string, object: unknown) {
    this.sessionObject.set(objectType, object);
  }

  getFromSession(objectType: string): unknown {
    return this.sessionObject.get(objectType);
  }
}

let sessionInstance: Session | undefined = undefined;

const getSessionInstance = () => {
  if (!sessionInstance) {
    sessionInstance = new Session();
  }
  return sessionInstance;
};

export default getSessionInstance;