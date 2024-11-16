import { type FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  title: string;
  moreLink?: string;
}

const LandingPage: FC<Props> = ({ title, children, moreLink }) => {
  return (
    <div className="card">
      <h2>{ title }</h2>
      <div>
        {children}
        {
          moreLink &&
          <div>
            <a href={moreLink}>More</a>
          </div>
        }
      </div>
    </div>
  )
}

export default LandingPage;
