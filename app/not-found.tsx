"use client";
import Link from "next/link";
declare global {
  interface Window {
    modal: any;
  }
}

export default function Page() {
  return (
    <>
      <button
        className="btn absolute top-[50%] left-[50%] mr-[-50%] translate-x-[-50%] translate-y-[-50%]"
        onClick={() => window.modal.showModal()}
      >
        #404 | Click for more explaination
      </button>
      <dialog id="modal" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center">#404 !</h3>
          <div className="chat chat-start">
            <div className="chat-bubble">
              In computer network communications, the HTTP 404, 404 not found,
              404, 404 error, page not found, or file not found error message is
              a hypertext transfer protocol (HTTP) standard response code, to
              indicate that the browser was able to communicate with a given
              server, but the server could not find what was requested. The
              error may also be used when a server does not wish to disclose
              whether it has the requested information. The website hosting
              server will typically generate a &quot404 Not Found&quot web page
              when a user attempts to follow a broken or dead link; hence the
              404 error is one of the most recognizable errors encountered on
              the World Wide Web. - Wikipedia
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">So what should I do ?</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble">Click on the button !</div>
          </div>
          <div className="modal-action">
            <Link className="btn btn-accent" href="/">
              Lobby
            </Link>
          </div>
        </form>
      </dialog>
    </>
  );
}
