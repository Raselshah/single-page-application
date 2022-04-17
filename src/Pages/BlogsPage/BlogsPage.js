import React from "react";

const BlogsPage = () => {
  return (
    <div className="blogs-bg">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20 mt-10 container mx-auto">
        <div className="question-one border p-3">
          <h2 className="text-2xl font-bold">
            Difference between authorization and authentication?
          </h2>
          <div className="question-answer mx-2 flex mt-2">
            <div className="one">
              <h3 className="text-lg font-bold">Authentication</h3>
              <p>1.Authentication verifies who the user is.</p>
              <p>
                2.Authentication works through passwords, one-time pins,
                biometric information, and other information provided or entered
                by the user.
              </p>
              <p>
                3.Authentication is visible to and partially changeable by the
                user.
              </p>
            </div>
            <div className="two">
              <h3 className="text-lg font-bold">Authorization</h3>
              <p>
                1. Authorization determines what resources a user can access.
              </p>
              <p>
                2.Authorization works through settings that are implemented and
                maintained by the organization.
              </p>
              <p>3.Authorization isn’t visible to or changeable by the user.</p>
            </div>
          </div>
        </div>

        <div className="question-two  border p-3">
          <h2 className="text-2xl font-bold"> Why are you using firebase?</h2>
          <p>
            Google Firebase offers many features that pitch it as the go-to
            backend development tool for web and mobile apps. It reduces
            development workload and time. And it's a perfect prototyping tool.
            Firebase is simple, lightweight, friendly, and industrially
            recognized.
          </p>
        </div>

        <div className="question-three  border p-3 mb-5">
          <h2 className="text-2xl font-bold">
            What other services does firebase provide other than authentication?
          </h2>
          <p>
            1.Parse – Open Source Backend Platform; <br />
            2.Back4app – Parse Hosting Platform; <br />
            3.Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;{" "}
            <br />
            4.Backendless – Mobile Backend and API Services Platform; <br />
            5.Kuzzle – Backend for web, hybrid, or native mobile apps and IoT
            projects; <br />
            6.Pubnub – Real-time APIs and Global Messaging; <br />
            7. Kumulos – App Performance Management;
            <br />
            8. Game Sparks – Game Backend Platform; <br />
            9.Hoodie – Generic backend with a client API for Offline First
            applications; <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
