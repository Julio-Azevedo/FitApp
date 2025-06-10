// src/@types/navigation.d.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Code: undefined;
  Home: undefined;
  ColetaInfo: undefined;
  TelaColetaPerfil: undefined;
};

export type VerificationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,
    'Home' | 'Login' | 'Code' | 'ColetaInfo' | 'TelaColetaPerfil'
>;