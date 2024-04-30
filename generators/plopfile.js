module.exports = (plop) => {
    // create your generators here
    plop.setGenerator('component', {
        description: 'Gerador de componentes',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Qual é o nome do componente?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/Component.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.ts',
                templateFile: 'templates/styles.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/stories.tsx',
                templateFile: 'templates/stories.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.tsx',
                templateFile: 'templates/test.tsx.hbs'
            }
        ]
    })
}
