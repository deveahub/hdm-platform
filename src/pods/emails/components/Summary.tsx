import Text from './Text';

interface SummaryProps {
  items: [string, string | string][];
  minNameWidth?: number;
}

const Summary = ({ items, minNameWidth = 180 }: SummaryProps) => (
  <tr>
    <th>
      <table cellPadding={0} cellSpacing={0}>
        {items.map(([name, value]) => (
          <tr key={`${name}-${value}`}>
            <Text minWidth={minNameWidth} pb={16}>
              {name}:
            </Text>
            <Text>
              <b>{value}</b>
            </Text>
          </tr>
        ))}
      </table>
    </th>
  </tr>
);

export default Summary;
