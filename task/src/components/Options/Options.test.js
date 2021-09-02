import { render } from '@testing-library/react';
import { Options } from './Options';

describe('Options', () => {
  it('render options component with props', () => {
    const { queryByText } = render(
      <Options screen="screen" tech="tech" process="process" memory="328" camera="18Мп" />,
    );
    expect(queryByText(/screen/i)).toBeInTheDocument();
    expect(queryByText(/tech/i)).toBeInTheDocument();
    expect(queryByText(/process/i)).toBeInTheDocument();
    expect(queryByText(/328/i)).toBeInTheDocument();
    expect(queryByText(/18Мп/i)).toBeInTheDocument();
  });
});
