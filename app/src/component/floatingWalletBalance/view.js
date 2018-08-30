// @flow
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { formatCredits } from 'lbry-redux'
import Address from '../address';
import Button from '../button';
import Colors from '../../styles/colors';
import floatingButtonStyle from '../../styles/floatingButton';

type Props = {
  balance: number,
};

class FloatingWalletBalance extends React.PureComponent<Props> {
  render() {
    const { balance, navigation } = this.props;

    return (
      <TouchableOpacity style={[floatingButtonStyle.container, floatingButtonStyle.bottomRight]}
                        onPress={() => navigation && navigation.navigate({ routeName: 'Wallet' })}>
        {isNaN(balance) && <ActivityIndicator size="small" color={Colors.White} />}
        <Text style={floatingButtonStyle.text}>
          {(balance || balance === 0) && (formatCredits(balance, 2) + ' LBC')}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default FloatingWalletBalance;
