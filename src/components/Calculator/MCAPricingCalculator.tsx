import React from 'react';
import { Calculator } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import CalculatorForm from './CalculatorForm';
import CalculatorResults from './CalculatorResults';
import { useCalculator } from './hooks/useCalculator';

export default function MCAPricingCalculator() {
  const {
    parameters,
    setParameters,
    result,
    error,
    handleCalculate,
  } = useCalculator();

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <Card
        title="MCA Pricing Calculator"
        subtitle="Calculate your merchant cash advance terms and payments"
        className="bg-gradient-to-br from-background-secondary to-background-primary border border-accent-primary/20"
      >
        <div className="space-y-6">
          <CalculatorForm
            parameters={parameters}
            onParametersChange={setParameters}
            error={error}
          />

          <Button
            variant="primary"
            icon={Calculator}
            fullWidth
            onClick={handleCalculate}
            className="mt-6"
          >
            Calculate Payments
          </Button>

          {result && (
            <CalculatorResults
              result={result}
              requestedAmount={parameters.requestedAmount}
            />
          )}
        </div>
      </Card>
    </div>
  );
}