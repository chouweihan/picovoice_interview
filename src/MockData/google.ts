interface IGoogleContent {
    body: string,
    type: "CODE" | "HTML"
}

interface IGoogle {
    label: string,
    content: Array<IGoogleContent>
}

const mockGoogleData: IGoogle[] = [
    {
        label: "C#",
        content: [
            {
                body: `<p>For more information, see <a href="https://cloud.google.com/dotnet/docs/setup" target="_blank">Setting Up a C# Development Environment</a>.</p><p>  
                If you are using Visual Studio 2017 or higher, open nuget package manager window and type the following:</p>`,
                type: "HTML"
            },
            {
                body: "Install-Package Google.Apis",
                type: "CODE"
            },
            {
                body: `<p>If you are using .NET Core command-line interface tools to install your dependencies, run the following command:</p>`,
                type: "HTML"
            },
            {
                body: "dotnet add package Google.Apis",
                type: "CODE"
            }
        ]
    },
    {
        label: "GO",
        content: [
            {
                body: `<p>For more information, see <a href="https://cloud.google.com/go/docs/setup" target="_blank">Setting Up a Go Development Environment</a>.</p>`,
                type: "HTML"
            },
            {
                body: "go get cloud.google.com/go/speech/apiv1",
                type: "CODE"
            }
        ]
    },
    {
        label: "Java",
        content: [
            {
                body: `<p>For more information, see <a href="https://cloud.google.com/java/docs/setup" target="_blank">Setting Up a Java Development Environment</a>.</p>`,
                type: "HTML"
            },
            {
                body: `implementation 'com.google.cloud:google-cloud-speech'`,
                type: "CODE"
            }
        ]
    },
    {
        label: "Node.js",
        content: [
            {
                body: `<p>For more information, see <a href="https://cloud.google.com/nodejs/docs/setup" target="_blank">Setting Up a Node Development Environment</a>.</p>`,
                type: "HTML"
            }, 
            {
                body: "npm install --save @google-cloud/speech",
                type: "CODE"
            }
        ]
    },
    {
        label: "PHP",
        content: [
            {
                body: `<p>For more information, see <a href="https://cloud.google.com/php/docs" target="_blank">Setting Up a PHP Development Environment</a>.</p>`,
                type: "HTML"
            }, 
            {
                body: "composer require google/apiclient",
                type: "CODE"
            }
        ]
    },
    {
        label: "Python",
        content: [
            {
                body: `<p>For more information, see <a href="https://cloud.google.com/python/docs/setup" target="_blank">Setting Up a Python Development Environment</a>.</p>`,
                type: "HTML"
            }, 
            {
                body: "pip install --upgrade google-cloud-speech",
                type: "CODE"
            }
        ]
    },
    {
        label: "Ruby",
        content: [
            {
                body: `<p>For more information, see <a href="https://cloud.google.com/ruby/docs/setup" target="_blank">Setting Up a Ruby Development Environment</a>.</p>`,
                type: "HTML"
            }, 
            {
                body: "gem install google-api-client",
                type: "CODE"
            }
        ]
    },
    {
        label: "Javascript",
        content: [
            {
                body: `<p>Some place holder text about javascript</p>`,
                type: "HTML"
            },
            {
                body: "Some place holder code",
                type: "CODE"
            }      
        ]
    },
    {
        label: "Typescript",
        content: [
            {
                body: `<p>Some place holder text about Typescript</p>`,
                type: "HTML"
            },
            {
                body: "Some place holder code",
                type: "CODE"
            }
        ]
    },
    {
        label: "C++",
        content: [
            {
                body: `<p>Some place holder text about C++</p>`,
                type: "HTML"
            },
            {
                body: "Some place holder code",
                type: "CODE"
            }
        ]
    },
    {
        label: "Swift",
        content: [
            {
                body: `<p>Some place holder text about Swift</p>`,
                type: "HTML"
            },
            {
                body: "Some place holder code",
                type: "CODE"
            }
        ]
    },
    {
        label: "Kotlin",
        content: [
            {
                body: `<p>Some place holder text about Kotlin</p>`,
                type: "HTML"
            },
            {
                body: "Some place holder code",
                type: "CODE"
            }
        ]
    }
]


export type {
    IGoogle,
    IGoogleContent
}

export {
    mockGoogleData
};


