// import idx from 'idx';
import * as React from 'react';
import { Impress, Step } from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import './App.css';

import awsconfig from './static/awsconfig.png';
import cloudformation from './static/cloudformation.png';
import cloudtrail from './static/CloudTrail.png';
import cloudwatch from './static/cloudwatch.svg';
import codebuild from './static/codebuild.png';
import codecommit from './static/codecommit.png';
import codedeploy from './static/codedeploy.png';
import codepipeline from './static/codepipeline.png';
import codepipelineIntro from './static/codepipeline_intro.png';
import devops from './static/devops.png';
import guardduty from './static/guardduty.png';
import iam from './static/iam.svg';
import jest from './static/jest.png';
import kms from './static/kms.png';
import macie from './static/macie.png';
import terraform from './static/terraform.png';


class App extends React.Component<any, {
  // isMobile: boolean, isShowKH: boolean, isShowTP: boolean
}> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Impress hint={false} progress ={true} rootData={{ width: 512 }}>
          {/* DevOps */}
          <Step>
            <div className="center" >
              <p style={{marginBottom: -50}}>what is...</p>
              <h1><b><span className="blue">Dev</span><span className="yellow">Ops</span></b></h1>
            </div>
          </Step>
          <Step data={{y: 500 }}>
            <div className="center">
              <div className="inline">
                <b className="blue">Development</b>
                <p>快速交付</p>
              </div>
              <div className="inline right line">
                <b className="yellow">Operations</b>
                <p>穩定上線</p>
              </div>
            </div>
          </Step>
          <Step data={{y: 1000 }}>
            <div className="center">
              <p><b>Culture (公司文化)</b>、<b>Automation (自動化)</b> ... 等</p>
            </div>
          </Step>
          <Step data={{y: 1500 }}>
            <div className="center">
              <p><b>人</b> > <b>政策</b> > <b>工具</b></p>
            </div>
          </Step>
          <Step data={{x: 1000, y:500, rotateZ: 90, scale: 2 }}>
            <div className="center">
              <img src={devops} alt="devops"/>
            </div>
          </Step>

          {/* DevSecOps */}
          <Step data={{x: 2000, y: 1200, rotateZ: 180}}>
            <div className="center" >
              <p style={{marginBottom: -50}}>more and more...</p>
              <h1>
                <b>
                  <span className="blue">Dev</span>
                  <span className="red">Sec</span>
                  <span className="yellow">Ops</span>
                </b>
              </h1>
            </div>
          </Step>
          <Step data={{x: 2000, y: 700, rotateZ: 180}}>
            <div className="center">
              <div className="inline spare left line">
                <b className="blue">Development</b>
                <p>快速交付</p>
              </div>
              <div className="inline">
                <b className="red">Security</b>
                <p>風險控制</p>
              </div>
              <div className="inline right line spare">
                <b className="yellow">Operations</b>
                <p>穩定上線</p>
              </div>
            </div>
          </Step>
          <Step data={{x: 2000, y: 200, rotateZ: 180}}>
            <div className="center">
              <div className="inline">
                <b>Code</b>
                <p>資訊隱藏</p>
                <div className="image-block">
                  <img src={kms} alt="kms"/>
                  <div>KMS</div>
                </div>
              </div>
              <div className="inline right line">
                <b>System</b>
                <p>操作權限</p>
                <div className="inline">
                  <div className="inline image-block">
                    <img src={iam} alt="iam"/>
                    <div>IAM</div>
                  </div>
                  <div className="inline right image-block">
                    <img src={awsconfig} alt="awsconfig"/>
                    <div>Config</div>
                  </div>
                  <div className="inline right image-block">
                    <img src={cloudtrail} alt="cloudtrail"/>
                    <div>CloudTrail</div>
                  </div>
                </div>
              </div>
              <div className="inline right line">
                <b>Service</b>
                <p>威脅保護</p>
                <div className="inline">
                  <div className="inline image-block">
                    <img src={guardduty} alt="guardduty"/>
                    <div>GuardDuty</div>
                  </div>
                  <div className="inline right image-block">
                    <img src={macie} alt="macie"/>
                    <div>Macie</div>
                  </div>
                </div>
              </div>
            </div>
          </Step>

          {/* CI */}
          <Step data={{x: 1000, y:-180, z: 200, rotateY:-90, rotateZ: 90, scale: 1 }}>
            <div className="center">
              <p><b className="big">CI</b> Continuous Integration</p>
            </div>
          </Step>
          <Step data={{x: 1000, y:-180, z: 100, rotateY:-90, rotateZ: 90, scale: 0.5 }}>
           <div className="center">
              <div className="inline">
                <b className="blue">Code</b>
                <div className="image-block">
                  <img src={codecommit} alt="codecommit"/>
                  <div>CodeCommit</div>
                </div>
              </div>
              <div className="inline right left line">
                <b className="blue">Build</b>
                <div className="image-block">
                  <img src={codebuild} alt="codebuild"/>
                  <div>CodeBuild</div>
                </div>
              </div>
              <div className="inline">
                <b className="blue">Test</b>
                <div className="image-block">
                  <img src={jest} alt="jest"/>
                  <div>Jest</div>
                </div>
              </div>
            </div>
          </Step>

          {/* CD */}
          <Step data={{x: 1000, y:1380, z: 200, rotateY:-90, rotateZ: 90, scale: 1 }}>
            <div className="center">
              <p><b className="big">CD</b> Continuous Delivery/Deploy</p>
            </div>
          </Step>
          <Step data={{x: 1000, y:1380, z: 100, rotateY:-90, rotateZ: 90, scale: 0.5 }}>
           <div className="center">
              <div className="inline">
                <b className="yellow">Deploy</b>
                <div className="image-block">
                  <img src={codedeploy} alt="codedeploy"/>
                  <div>CodeDeploy</div>
                </div>
              </div>
              <div className="inline right line">
                <b className="yellow">Monitor</b>
                <div className="image-block">
                  <img src={cloudwatch} alt="cloudwatch"/>
                  <div>CloudWatch</div>
                </div>
              </div>
            </div>
          </Step>

          {/* Code Pipeline */}
          <Step data={{x: 1000, y:3000, z: 100, rotateY:-90, rotateZ: 90 }}>
            <div className="center">
              <p><b className="big">CodePipeline</b></p>
              <div className="image-block">
                <img className="large" src={codepipeline} alt="codepipeline"/>
              </div>
            </div>
          </Step>
          <Step data={{x: 1000, y:3000, z: 100, rotateY:-180, rotateZ: 90 }}>
            <div className="center">
            <p><b className="big">CodePipeline</b></p>
              <div className="image-block">
                <img className="large" src={codepipelineIntro} alt="codepipelineIntro"/>
              </div>
            </div>
          </Step>

          {/* Infrastructure as Code */}
          <Step data={{x: 1000, y:4500, z: 100, rotateY:-180, rotateZ: 90 }}>
            <div className="center">
            <p><b className="big">IaC</b> Infrastructure as Code</p>
            <div className="inline">
                {/* <b className="blue">Code</b> */}
                <div className="image-block">
                  <img src={cloudformation} alt="cloudformation"/>
                  <div>CloudFormation</div>
                </div>
              </div>
              <div className="inline right line">
                {/* <b className="blue">Build</b> */}
                <div className="image-block">
                  <img src={terraform} alt="terraform"/>
                  <div>TerraForm</div>
                </div>
              </div>
            </div>
          </Step>
          <Step data={{x: 1000, y:4000, z: 10000, rotateY:-180, rotateZ: 90 }} className="hide">
            <div className="center">
              <div className="inline left line">
                <b className="blue">快速複用</b>
                <p>服務驗證</p>
              </div>
              <div className="inline">
                <b className="red">版控一致</b>
                <p>建置</p>
              </div>
              <div className="inline right line">
                <b className="yellow">相依資源</b>
                <p>服務安全性</p>
              </div>
            </div>
          </Step>

          <Step data={{x: 1000, y: 500, z: 3000, rotateY: 30 }} className="hide">
            <p>by <b>OA</b>, Thanks.</p>
          </Step>
        </Impress>
      </div>
    );
  }
}

export default App;
