import React from "react";
import { Wrapper, DesignWrapper, Card } from "./DesignElements";

const Design = () => {
  return (
    <>
      <Wrapper id="design">
        <h2>Design process I follow</h2>
        <DesignWrapper>
          <Card>
            <div>1</div>
            <h3>Research</h3>
            <p>
              Perform a preliminary research on the basis of the goals or
              objectives set prior to starting a project.
            </p>
          </Card>

          <Card>
            <div>2</div>
            <h3>Design</h3>
            <p>
              Design prototype and wireframe of the project using design tools
              like figma and adobeXD.
            </p>
          </Card>

          <Card>
            <div>3</div>
            <h3>Develop</h3>
            <p>
              Coding on the basis of the prototype. Writing efficient code and
              researching in order to build effective apps.
            </p>
          </Card>

          <Card>
            <div>4</div>
            <h3>Iterate</h3>
            <p>
              Reviewing or going over the project to fix bugs and issues
              pertaining in the app before deployment.
            </p>
          </Card>
        </DesignWrapper>
      </Wrapper>
    </>
  );
};

export default Design;
