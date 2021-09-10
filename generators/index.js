module.exports = plop => {
  const stylesTemplateFile = 'templates/generics/styles.hbs';
  const stylesPath = (entity) => `../src/${entity}s/{{ name }}/styles.module.scss`;

  const indexWithStoreTemplateFile = 'templates/generics/indexWithStore.hbs';
  const indexWithoutStoreTemplateFile = 'templates/generics/indexWithoutStore.hbs';
  const indexPath = (entity) => `../src/${entity}s/{{ name }}/index.tsx`;

  function genericSetGenerator(entity) {
    plop.setGenerator(entity, {
      prompts: [{
        type: 'input',
        name: 'name',
        message: `${entity} name please'`,
      }, {
        type: 'confirm',
        name: 'withStore',
        message: 'Would you like to connect store?'
      }],
      actions: (data) => {
        const actions = [{
          type: 'add',
          path: stylesPath(entity),
          templateFile: stylesTemplateFile,
          abortOnFail: true,
        }];

        if (data.withStore) {
          actions.push({
            type: 'add',
            path: indexPath(entity),
            templateFile: indexWithStoreTemplateFile,
            abortOnFail: true,
          })
        } else {
          actions.push({
            type: 'add',
            path: indexPath(entity),
            templateFile: indexWithoutStoreTemplateFile,
            abortOnFail: true,
          })
        }

        return actions;
      },
    });
  };

  plop.setGenerator('component', {
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name please',
    }],
    actions: [
      {
        type: 'add',
        path: stylesPath('component'),
        templateFile: stylesTemplateFile,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ name }}/{{ camelCase name }}.stories.tsx',
        templateFile: 'templates/components/stories.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: indexPath('component'),
        templateFile: 'templates/components/index.hbs',
        abortOnFail: true,
      },
    ],
  });

  genericSetGenerator('container');
  genericSetGenerator('page');
};