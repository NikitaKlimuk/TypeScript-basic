interface IConfig {
  protocol: "https" | "http";
  port: 3000 | 3001;
  log: (msg: string) => void;
}

interface IRole {
  role: string;
}

interface IConfigWithRole extends IConfig, IRole {}

const serverConfig: IConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
  log: (msg: string): void => console.log(msg),
};

// const backupConfig: IConfig = {
//   protocol: "http",
//   port: 3000,
// };

const port3000: number = 3000;
const port3001: number = 3001;

type StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
) => string;

const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" => {
  if (port === port3000 || port === port3001) {
    log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error("Some errors here");
  }
  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

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

interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: "absolute",
  top: "20px",
  left: "35px",
};
