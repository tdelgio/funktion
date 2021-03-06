import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Contact = props => {
  return (
    <div className="w-full overflow-hidden flex items-center justify-between">
      <div className="lg:hidden flex flex-grow flex-col justify-center items-center">
        <div className="transform translate-x-2 flex flex-col items-center py-4">
          <p className="text-center text-lg font-work-reg leading-6  tracking-wider">
            {props.data.text1} <br /> {props.data.text2}
          </p>
          <u className="text-lg font-work-semi leading-6  tracking-wider text-center py-3">
            {props.data.underline}
          </u>
          <Link
            to="/contact"
            className=" text-white flex font-work-reg leading-6  tracking-wider items-center h-8 bg-concrete-green rounded-md px-3 mt-4 text-center"
          >
            {props.data.button}
          </Link>
        </div>{" "}
      </div>
      <div className="block lg:hidden transform translate-x-4">
        <StaticImage
          height={320}
          alt="logo funksion"
          objectFit="contain"
          placeholder="tracedSVG"
          src="../../images/logoo.png"
          style={{ opacity: "0.8" }}
        />
      </div>

      <div className="hidden w-full lg:h-screen lg:flex px-8 justify-center">
        <div className="flex items-center justify-center">
          <svg
            width="18"
            height="333"
            viewBox="0 0 18 333"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.387743 203.749L0.0791626 265.029L16.5788 264.992L16.8874 203.712L0.387743 203.749Z"
              fill="#24617F"
            />
            <path
              d="M0.467944 135.845L0.159363 197.125L16.659 197.088L16.9676 135.808L0.467944 135.845Z"
              fill="#873A3A"
            />
            <path
              d="M0.546923 67.9409L0.238342 129.221L16.738 129.184L17.0466 67.9039L0.546923 67.9409Z"
              fill="#E0903A"
            />
            <path
              d="M0.308763 271.653L0.000183105 332.933L16.4998 332.896L16.8084 271.616L0.308763 271.653Z"
              fill="#14223C"
            />
            <path
              d="M0.625964 0.0369721L0.317383 61.3167L16.817 61.2798L17.1256 5.50012e-05L0.625964 0.0369721Z"
              fill="#E8D5AA"
            />
          </svg>
          <div className="flex flex-col pl-4">
            <p className="font-work-bold text-5xl pl-2 ">
              /{props.data.text1}
              <br /> {` `}
              {props.data.text2}
            </p>
            <p className="text-2xl py-4 font-work-md leading-6 ">
              {props.data.subtitle}
            </p>
            <u className="text-xl lg:text-2xl font-work-reg leading-6  tracking-wider py-3">
              {props.data.underline}
            </u>
          </div>
        </div>
        <form
          className="w-1/3 flex flex-col items-center justify-center pt-20"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          action="/thanks"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className="w-3/4">
            <input
              className="w-full border-2 font-work-reg text-xl rounded-md my-2 p-2"
              placeholder="Name: "
              type="text"
              name="name"
              id="name"
              required
            />
          </label>
          <label className="w-3/4">
            <input
              className="w-full border-2 font-work-reg text-xl rounded-md my-2 p-2"
              placeholder="E-mail: "
              type="email"
              name="email"
              id="email"
              required
            />
          </label>
          <label className="w-3/4">
            <textarea
              className="w-full border-2 font-work-reg text-xl rounded-md my-2 p-2"
              placeholder="Message: "
              name="message"
              id="message"
              rows="7"
            />
          </label>

          <button
            className="text-white font-work-reg tracking-wide leading-5 flex items-center h-8 bg-autumn-green hover:bg-concrete-green rounded-md px-4 text-center lg:transform lg:scale-125"
            type="submit"
          >
            {props.data.button2}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
