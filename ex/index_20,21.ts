let msg: "Hello" = "Hello";

msg = "Hello";

type Config = {
  protocol: "https" | "http";
  port: 3000 | 3001;
};
type Role = {
  role: string;
};
type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
};

const backupConfig: Config = {
  protocol: "http",
  port: 3000,
};

const port3000: number = 3000;
const port3001: number = 3001;

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error("Some errors here");
  }
  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port);

type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
type AnimationID = string | number;

function createAnimation(
  id: AnimationID,
  animName: string,
  timingFunc: AnimationTimingFunc = "ease",
  duration: number,
  iterCount: "infinite" | number
): void {
  const elem = document.querySelector(`#${id}`) as HTMLElement;

  if (elem) {
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
    elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
  }
}

createAnimation("id", "fade", "ease-in", 5, "infinite");
