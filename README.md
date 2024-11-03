# JailBreakAttack
All result files are given in the results directory. The structure of the "results" directory is given below:
.
└── results/
    └── 1. Main Experiments/
        ├── 1. Question Bank/
        │   ├── Template 1/
        │   │   ├── Judge.  GPT-4o/
        │   │   │   ├── 1. Llama-2!/
        │   │   │   │   └── template-1, model-llama2, judge-gpt4o, goal, prompt, response, target_response.csv
        │   │   │   ├── 2. Llama-3!/
        │   │   │   │   └── template-1, model-llama3, judge-gpt4o, goal, prompt, response, target_response.csv
        │   │   │   ├── 3. Gemma-2!/
        │   │   │   │   └── template-1, model-gemma2, judge-gpt4o, goal, prompt, response, target_response.csv
        │   │   │   ├── 4. Vicuna!/
        │   │   │   │   └── template-1, model-vicuna, judge-gpt4o, goal, prompt, response, target_response.csv
        │   │   │   ├── 5.  GPT-3.5/
        │   │   │   │   └── template-1, model-gpt3.5, judge-gpt4o, goal, prompt, response, target_response, judge.csv
        │   │   │   └── 6. GPT-4o/
        │   │   │       └── template-1, model-gpt4o, judge-gpt4o, goal, prompt, response, target_response, judge.csv
        │   │   └── Judge. Llama3-70B/
        │   │       ├── 1. Llama-2!  /
        │   │       │   └── template-1, model-llama2, judge-llama3-70b, goal, response, target_response.csv 
        │   │       ├── 2. Llama-3!/
        │   │       │   └── template-1, model-llama3, judge-llama3-70b, goal, response, target_response.csv  
        │   │       ├── 3. Gemma-2! /
        │   │       │   └── template-1, model-gemma2, judge-llama3-70b, goal, response, target_response.csv
        │   │       ├── 4. Vicuna! /
        │   │       │   └── template-1, model-vicuna, judge-llama3-70b, goal, response, target_response.csv
        │   │       ├── 5.  GPT-3.5!/
        │   │       │   └── template-1, model-gpt3.5, judge-llama3-70b, goal, response, target_response.csv 
        │   │       └── 6. GPT-4o/
        │   │           └── template-1, model-gpt4o, judge-llama3-70b, goal, response, target_response, judge.csv
        │   └── Template 2/
        │       ├── Judge.  GPT-4o/
        │       │   ├── 1. Llama-2! /
        │       │   │   └── template-2, model-llama2, judge-gpt4o, goal, response.csv
        │       │   ├── 2. Llama-3! /
        │       │   │   └── template-2, model-llama3, judge-gpt4o, goal, response, target_response.csv
        │       │   ├── 3. Gemma-2!/
        │       │   │   └── template-2, model-gemma2, judge-gpt4o, goal, response, target_response.csv
        │       │   ├── 4. Vicuna! /
        │       │   │   └── template-2, model-vicuna, judge-gpt4o, goal, response, target_response.csv 
        │       │   ├── 5.  GPT-3.5 /
        │       │   │   └── template-2, model-gpt3.5, judge-gpt4o, goal, response, target_response, judge.csv
        │       │   └── 6. GPT-4o/
        │       │       └── template-2, model-gpt4o, judge-gpt4o, goal, response, target_response, judge.csv
        │       └── Judge. Llama3-70B /
        │           ├── 1. Llama-2!/
        │           │   └── template-2, model-llama2, judge-llama3-70b, goal, prompt, response.csv 
        │           ├── 2. Llama-3! /
        │           │   └── template-2, model-llama3, judge-llama3-70b, goal, prompt, response, target_response.csv
        │           ├── 3. Gemma-2!/
        │           │   └── template-2, model-gemma2, judge-llama3-70b, goal, prompt, response, target_response.csv
        │           ├── 4. Vicuna!/
        │           │   └── template-2, model-vicuna, judge-llama3-70b, goal, prompt, response, target_response.csv
        │           ├── 5.  GPT-3.5! /
        │           │   └── template-2, model-gpt3.5, judge-llama3-70b, goal, prompt, response, target_response.csv
        │           └── 6. GPT-4o  /
        │               └── template-2, model-gpt4o, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
        ├── 2. Dialog Completion/
        │   ├── Template 1/
        │   │   ├── Judge.  GPT-4o/
        │   │   │   ├── 1. Llama-2!/
        │   │   │   │   └── template-1, model-llama2, judge-gpt4o, goal, response.csv
        │   │   │   ├── 2. Llama-3!/
        │   │   │   │   └── template-1, model-llama3, judge-gpt4o, goal, response.csv
        │   │   │   ├── 3. Gemma-2/
        │   │   │   │   └── template-1, model-gemma2, judge-gpt4o, goal, response, judge.csv
        │   │   │   ├── 4. Vicuna/
        │   │   │   │   └── template-1, model-vicuna, judge-gpt4o, goal, response, target_response.csv
        │   │   │   ├── 5.  GPT-3.5/
        │   │   │   │   └── template-1, model-gpt3.5, judge-gpt4o, goal, response, judge.csv
        │   │   │   └── 6. GPT-4o/
        │   │   │       └── template-1, model-gpt4o, judge-gpt4o, goal, response, judge.csv.csv
        │   │   └── Judge. Llama3-70B/
        │   │       ├── 1. Llama-2!/
        │   │       │   └── template-1, model-llama2, judge-llama3-70b, goal, response.csv   
        │   │       ├── 2. Llama-3 /
        │   │       │   └── template-1, model-llama3, judge-llama3-70b, goal, response, judge.csv
        │   │       ├── 3. Gemma-2/
        │   │       │   └── template-1, model-gemma2, judge-llama3-70b, goal, response, judge.csv
        │   │       ├── 4. Vicuna /
        │   │       │   └── template-1, model-vicuna, judge-llama3-70b, goal, response, target_response.csv
        │   │       ├── 5.  GPT-3.5!/
        │   │       │   └── template-1, model-gpt3.5, judge-llama3-70b, goal, response.csv 
        │   │       └── 6. GPT-4o/
        │   │           └── template-1, model-gpt4o, judge-llama3-70b, goal, response.csv
        │   └── Template 2/
        │       ├── Judge.  GPT-4o/
        │       │   ├── 1. Llama-2/
        │       │   │   └── template-2, model-llama2, judge-gpt4o, goal, response, judge.csv 
        │       │   ├── 2. Llama-3/
        │       │   │   └── template-2, model-llama3, judge-gpt4o, goal, response, judge.csv 
        │       │   ├── 3. Gemma-2/
        │       │   │   └── template-2, model-gemma2, judge-gpt4o, goal, response, judge.csv
        │       │   ├── 4. Vicuna/
        │       │   │   └── template-2, model-vicuna, judge-gpt4o, goal, response, judge.csv  
        │       │   ├── 5.  GPT-3.5/
        │       │   │   └── template-2, model-gpt3.5, judge-gpt4o, goal, response, judge.csv 
        │       │   └── 6. GPT-4o/
        │       │       └── template-2, model-gpt4o, judge-gpt4o, goal, response, judge.csv
        │       └── Judge. Llama3-70B /
        │           ├── 1. Llama-2!/
        │           │   └── template-2, model-llama2, judge-llama3-70b, goal, response.csv 
        │           ├── 2. Llama-3!/
        │           │   └── template-2, model-llama3, judge-llama3-70b, goal, response.csv 
        │           ├── 3. Gemma-2!/
        │           │   └── template-2, model-gemma2, judge-llama3-70b, goal, response.csv
        │           ├── 4. Vicuna!/
        │           │   └── template-2, model-vicuna, judge-llama3-70b, goal, response.csv
        │           ├── 5.  GPT-3.5/
        │           │   └── template-2, model-gpt3.5, judge-llama3-70b, goal, response, judge.csv 
        │           └── 6. GPT-4o/
        │               └── template-2, model-gpt4o, judge-llama3-70b, goal, response, judge.csv  
        └── 3. Game Environment/
            ├── Template 1/
            │   ├── Judge.  GPT-4o/
            │   │   ├── 1. Llama-2/
            │   │   │   └── template-1, model-llama2, judge-gpt4o, goal, prompt, response, target_response, judge.csv
            │   │   ├── 2. Llama-3/
            │   │   │   └── template-1, model-llama3, judge-gpt4o, goal, prompt, response, target_response, judge.csv
            │   │   ├── 3. Gemma-2/
            │   │   │   └── template-1, model-gemma2, judge-gpt4o, goal, prompt, response, target_response, judge.csv
            │   │   ├── 4. Vicuna/
            │   │   │   └── template-1, model-vicuna, judge-gpt4o, goal, prompt, response, target_response, judge.csv
            │   │   ├── 5.  GPT-3.5/
            │   │   │   └── template-1, model-gpt3.5, judge-gpt4o, goal, prompt, response, target_response, judge.csv
            │   │   └── 6. GPT-4o/
            │   │       └── template-1, model-gpt4o, judge-gpt4o, goal, prompt, response, target_response, judge.csv
            │   └── Judge. Llama3-70B/
            │       ├── 1. Llama-2/
            │       │   └── template-1, model-llama2, judge-llama3-70b, goal, prompt, response, target_response, judge.csv   
            │       ├── 2. Llama-3  /
            │       │   └── template-1, model-llama3, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
            │       ├── 3. Gemma-2 /
            │       │   └── template-1, model-gemma2, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
            │       ├── 4. Vicuna/
            │       │   └── template-1, model-vicuna, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
            │       ├── 5.  GPT-3.5 /
            │       │   └── template-1, model-gpt3.5, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
            │       └── 6. GPT-4o/
            │           └── template-1, model-gpt4o, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
            └── Template 2/
                ├── Judge.  GPT-4o/
                │   ├── 1. Llama-2 /
                │   │   └── template-2, model-llama2, judge-gpt4o, goal, prompt, response, target_response, judge.csv
                │   ├── 2. Llama-3/
                │   │   └── template-2, model-llama3, judge-gpt4o, goal, prompt, response, target_response, judge.csv
                │   ├── 3. Gemma-2/
                │   │   └── template-2, model-gemma2, judge-gpt4o, goal, prompt, response, target_response, judge.csv
                │   ├── 4. Vicuna  /
                │   │   └── template-2, model-vicuna, judge-gpt4o, goal, prompt, response, target_response, judge.csv
                │   ├── 5.  GPT-3.5 /
                │   │   └── template-2, model-gpt3.5, judge-gpt4o, goal, prompt, response, target_response, judge.csv
                │   └── 6. GPT-4o/
                │       └── template-2, model-gpt4o, judge-gpt4o, goal, prompt, response, target_response, judge.csv
                └── Judge. Llama3-70B /
                    ├── 1. Llama-2 /
                    │   └── template-2, model-llama2, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
                    ├── 2. Llama-3 /
                    │   └── template-2, model-llama3, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
                    ├── 3. Gemma-2/
                    │   └── template-2, model-gemma2, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
                    ├── 4. Vicuna/
                    │   └── template-2, model-vicuna, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
                    ├── 5.  GPT-3.5 /
                    │   └── template-2, model-gpt3.5, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
                    └── 6. GPT-4o  /
                        └── template-2, model-gpt4o, judge-llama3-70b, goal, prompt, response, target_response, judge.csv
