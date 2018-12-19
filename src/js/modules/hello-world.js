class Message {
  constructor(message) {
    this._message = message;
  }
  hello_world() {
    alert(this._message);
  }
}

export default Message;