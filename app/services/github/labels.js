const org = require('./index');
const { github: githubConfig } = require('../../../config').common;

const DEFAULT_LABEL = {
  labelName: 'Lobruno Approval Required :smile:',
  labelColor: '111E6C',
  labelDescription: 'No Vimo'
};

const createLabel = ({ repositoryName, labelName, labelColor, labelDescription = '' }) =>
  org.issues.createLabel({
    owner: githubConfig.woloxOrganizationName,
    repo: repositoryName,
    name: labelName,
    color: labelColor,
    description: labelDescription
  });

module.exports = { createLabel, DEFAULT_LABEL };
