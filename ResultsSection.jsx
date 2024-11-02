import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
const ResultsSection = () => {
  const [selections, setSelections] = useState({
    experiment: '',
    scenario: '',
    template: '',
    judge: '',
    model: ''
  });
  const options = {
    experiments: ['Main experiments', 'Baselines', 'Defenses', 'Ablation study'],
    scenarios: ['Question Bank', 'Dialogue completion', 'Game environment'],
    templates: ['Template 1', 'Template 2'],
    judges: ['Judge: Gpt4o', 'Judge: Llama3-70B'],
    models: ['Llama2', 'Llama3', 'Gemma2', 'Vicuna', 'Gpt3.5', 'Gpt4o']
  };
  const handleChange = (field, value) => {
    const newSelections = { ...selections };
    newSelections[field] = value;

    // Reset dependent fields
    const fields = ['experiment', 'scenario', 'template', 'judge', 'model'];
    const index = fields.indexOf(field);
    fields.slice(index + 1).forEach(f => newSelections[f] = '');

    setSelections(newSelections);
  };
  const renderDropdown = (options, field, label) => (
    <select 
      value={selections[field]} 
      onChange={(e) => handleChange(field, e.target.value)}
      className="form-select w-full mb-4 p-2 border rounded-lg"
    >
      <option value="">Select {label}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
  const renderExcelDisplay = () => (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <p className="text-center text-gray-700">
        Excel data for:
        <br />
        {${selections.scenario} > ${selections.template} > ${selections.judge} > ${selections.model}}
      </p>
    </div>
  );
  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Results</h2>

      {renderDropdown(options.experiments, 'experiment', 'Experiment Type')}

      {selections.experiment === 'Main experiments' && (
        <>
          {renderDropdown(options.scenarios, 'scenario', 'Scenario')}

          {selections.scenario && (
            <>
              {renderDropdown(options.templates, 'template', 'Template')}

              {selections.template && (
                <>
                  {renderDropdown(options.judges, 'judge', 'Judge')}

                  {selections.judge && (
                    <>
                      {renderDropdown(options.models, 'model', 'Model')}

                      {selections.model && renderExcelDisplay()}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </Card>
  );
};
export default ResultsSection;
