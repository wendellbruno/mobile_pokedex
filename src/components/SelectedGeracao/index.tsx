import React from 'react';
import {StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import {FontAwesome} from '@expo/vector-icons';
import { theme } from '../../global';
import {useGlobalContext} from '../../Context';

import {Container} from './styles'


export const SelectedGeracao: React.FC = () => {
  const value: number[] = [1,2,3,4,5,6,7,8]  
  const {selectGeneration} = useGlobalContext();
  
  return (
    <Container>
       <SelectDropdown
     data={value}
     onSelect={(selected, index) => {
        selectGeneration(selected);
     }}
     defaultButtonText='Geração'
     dropdownIconPosition='right'
     buttonStyle={styles.selected}
     renderDropdownIcon={isOpened => {
        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
      }}
      rowStyle={styles.row}
      rowTextStyle={styles.rowText}

      />
 </Container>

  )
}

const styles = StyleSheet.create({
    selected: {
        borderWidth: 1.5,
        borderColor: theme.colors.escala_de_cinza200,
        borderRadius: 49
    },
    row:{
        backgroundColor: theme.colors.escala_de_cinza800, 
        borderBottomColor: theme.colors.escala_de_cinza200
    },
    rowText:{
        color: theme.colors.escala_de_cinza_branco
    }
})
