import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    ScrollViewProps,
    StyleProp,
    View,
    ViewStyle,
} from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';
import { Edge, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '@/theme/theme';

type StatusBarVariant = 'light' | 'dark' | 'purple';

type Props = {
  children: React.ReactNode;
  padded?: boolean;
  paddingHorizontal?: number;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  scroll?: boolean;
  tabbed?: boolean;
  /** Eğer sayfada Native Header (Stack.Screen) varsa true geçilmeli */
  withHeader?: boolean;
  statusBarVariant?: StatusBarVariant;
  scrollProps?: Omit<ScrollViewProps, 'contentContainerStyle' | 'style'>;
  backgroundColor?: 'purple' | 'white' | string;
};

export const ScreenContainer: React.FC<Props> = ({
  children,
  padded = true,
  paddingHorizontal = theme.spacing.md,
  scroll = false,
  tabbed = false,
  withHeader = false,
  statusBarVariant = 'purple',
  style,
  contentStyle,
  scrollProps,
  backgroundColor = 'white',
}) => {
  const insets = useSafeAreaInsets();

  const statusBarColor =
    statusBarVariant === 'purple' ? '#5018B5' : statusBarVariant === 'dark' ? '#000000' : '#ffffff';
  const backgroundColorFinal =
    backgroundColor === 'purple' ? '#5018B5' : backgroundColor === 'white' ? '#ffffff' : '#000000';
  const statusBarStyle: 'light' | 'dark' =
    statusBarVariant === 'dark' || statusBarVariant === 'purple' ? 'light' : 'dark';

  const edges: Edge[] = [];
  if (!withHeader) edges.push('top');
  if (!tabbed) edges.push('bottom');

  const Wrapper = scroll ? ScrollView : View;

  const baseContent: ViewStyle = {
    flex: scroll ? undefined : 1,
    paddingHorizontal: padded ? paddingHorizontal : 0,
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface.low }}>
      <SystemBars style={statusBarStyle} />

      {!withHeader && (
        <View
          style={{
            height: insets.top,
            backgroundColor: statusBarColor,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 99,
          }}
        />
      )}

      <SafeAreaView
        style={[{ flex: 1, backgroundColor: backgroundColorFinal }, style]}
        edges={edges}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          // Klavye açıldığında offset hesabı
          keyboardVerticalOffset={Platform.OS === 'ios' ? (withHeader ? 64 : insets.top) : 0}
        >
          <Wrapper
            {...(scroll ? scrollProps : {})}
            style={{ flex: 1 }}
            contentContainerStyle={scroll ? [baseContent, contentStyle] : undefined}
          >
            {scroll ? children : <View style={[baseContent, contentStyle]}>{children}</View>}
          </Wrapper>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
