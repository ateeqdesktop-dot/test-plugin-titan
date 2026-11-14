import { Plugin } from "@opencode/plugin"; export default Plugin.define({ id: "test.plugin", async setup(ctx) { console.log("test plugin loaded"); return async () => {} } })
