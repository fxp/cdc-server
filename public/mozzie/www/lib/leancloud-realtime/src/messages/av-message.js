/**
 * 消息接口，所有通过 {@link Realtime#register} 注册的消息类需要实现该接口
 *
 * @interface AVMessage
 */

/**
 * 判断给定的内容是否是该类型的 Message
 *
 * @function
 * @static
 * @name AVMessage.validate
 * @param {Object} json JSON 格式的消息内容
 * @returns {Boolean}
 */

/**
 * 解析处理消息内容 （JSON -> AVMessage）
 * <p>
 * 如果子类没有提供 message，直接使用该 message，
 * 如果没有提供，实例化一个当前类型的 message，
 * 将 JSON 格式的消息内容中相关的信息设置给该消息，
 * 然后将其传递给父类的 parse 方法
 * （当然，你也可以不管父类直接返回 message）。
 *
 * @function
 * @static
 * @name AVMessage.parse
 * @param  {Object}  json    JSON 格式的消息内容
 * @param  {AVMessage} message 子类提供的消息实例
 * @return {AVMessage}
 */

/**
 * 将当前消息序列化为 JSON 对象 （AVMessage -> JSON)
 * <p>
 * 在这个方法中，应该先调用父类的 toJSON 方法，得到 JSON 对象，
 * 然后，将当前消息实例的信息修改 JSON 对象后返回
 * （当然，你也可以不管父类返回的 JSON）。
 *
 * @function
 * @name AVMessage#toJSON
 * @return {Object} JSON 格式的消息内容
 */
