import storage from '@/storage';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should set and get an item in localStorage', () => {
    storage.set('testKey', 'testValue');
    const value = storage.get('testKey');
    expect(value).toBe('testValue');
  });

  it('should return null for a non-existing key', () => {
    const value = storage.get('nonExistingKey');
    expect(value).toBeNull();
  });

  it('should overwrite an existing key', () => {
    storage.set('testKey', 'initialValue');
    storage.set('testKey', 'newValue');
    const value = storage.get('testKey');
    expect(value).toBe('newValue');
  });
  it("should remove an item from localStorage", () => {
    storage.set("testKey", "testValue");
    localStorage.removeItem("my-app-testKey");
    const value = storage.get("testKey");
    expect(value).toBeNull();
  });

  it("should handle setting and getting an empty string", () => {
    storage.set("emptyKey", "");
    const value = storage.get("emptyKey");
    expect(value).toBe("");
  });

  it("should handle setting and getting a null value", () => {
    storage.set("nullKey", "null");
    const value = storage.get("nullKey");
    expect(value).toBe("null");
  });

  it("should handle setting and getting a numeric value", () => {
    storage.set("numberKey", "12345");
    const value = storage.get("numberKey");
    expect(value).toBe("12345");
  });

  it("should handle setting and getting a boolean value", () => {
    storage.set("booleanKey", "true");
    const value = storage.get("booleanKey");
    expect(value).toBe("true");
  });

  it("should handle setting and getting a JSON object", () => {
    const jsonObject = JSON.stringify({ key: "value" });
    storage.set("jsonKey", jsonObject);
    const value = storage.get("jsonKey");
    expect(value).toBe(jsonObject);
  });
});
