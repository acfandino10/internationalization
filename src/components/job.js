import React from 'react';
import {FormattedDate, FormattedMessage, FormattedRelative, FormattedNumber, FormattedPlural} from 'react-intl';

export default class Job extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>
					<FormattedMessage id={this.props.offer.name} />
				</td>
  				<td>
					<FormattedMessage id={this.props.offer.company} />
  				</td>
      			<td>
					{this.props.offer.salary} <FormattedPlural value={this.props.offer.salary} one={<FormattedMessage id="million" />} other={<FormattedMessage id="millions" />} />
      			</td>
      			<td>{this.props.offer.city}</td>
				<td>
					<FormattedDate
						value={new Date(this.props.offer.date)}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/> (<FormattedRelative value={new Date(this.props.offer.date)} format="short" />)
				</td>
				<td>
					<FormattedNumber
						value={this.props.offer.visits}
					/>
				</td>
  			</tr>
  		);
	}
}