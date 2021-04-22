// The folowing code works without paths
import { logHello } from "@demoproject/core/lib/helpers";

export const main = () => {
	logHello()
}

// The following code does not work when paths are set !!
// import { logHello } from "@demoproject/core/helpers";

// export const main = () => {
// 	logHello()
// }