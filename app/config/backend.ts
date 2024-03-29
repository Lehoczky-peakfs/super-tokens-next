import EmailPasswordNode from "supertokens-node/recipe/emailpassword"
import SessionNode from "supertokens-node/recipe/session"
import Dashboard from "supertokens-node/recipe/dashboard"
import UserRoles from "supertokens-node/recipe/userroles"
import { appInfo } from "./appInfo"
import { TypeInput } from "supertokens-node/types"
import SuperTokens from "supertokens-node"

export let backendConfig = (): TypeInput => {
  return {
    supertokens: {
      connectionURI: process.env.NEXT_PUBLIC_SUPERTOKENS_CONNECTION_URI!,
      apiKey: process.env.NEXT_PUBLIC_SUPERTOKENS_API_KEY,
    },
    appInfo,
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
      EmailPasswordNode.init(),
      SessionNode.init(),
      Dashboard.init(),
      UserRoles.init(),
    ],
    isInServerlessEnv: true,
    framework: "custom",
  }
}

let initialized = false
export function ensureSuperTokensInit() {
  if (!initialized) {
    SuperTokens.init(backendConfig())
    initialized = true
  }
}
