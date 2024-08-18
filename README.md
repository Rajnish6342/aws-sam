* First we package the code so it gives a template-export file which hold code uri using command
* `sam package --s3-bucket=rajnish-demo-learning  --output-template-file=template-export.yaml`
* Then we deploy the same using
* `sam deploy --template-file /Users/rsingh11/Desktop/Rajnish/learning/aws/2-sam/template-export.yaml --stack-name <YOUR STACK NAME>`
* We can have this options configured samconfig.toml file
* Instead of running sam command again and again we can have a codebuild and pipeline configured so it can take care of this steps by itself
* We can speicify a package stage by specifying --config-env option `sam package --config-env preprod`

**SAM PIPELINES**

* use `sam pipeline init` command to initialize
* Give set of answers or leave blank for auto creation
* It will generate codepipeline.yaml for multi stages
* run this command to create pipeline and stack `sam deploy -t codepipeline.yaml --stack-name randomno-preprod --capabilities=CAPABILITY_IAM`
* Opinion Keep pipeline on your hand make changes in template and create a pipeline using codebuild and pipeline stages simple and clean.
