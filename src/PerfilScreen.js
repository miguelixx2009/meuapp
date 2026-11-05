import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { buscarUsuarioPorId } from '../database/database'; // Ajuste o caminho do banco conforme sua estrutura

export default function UserScreen({ route }) {
  // Recebe o userId enviado pelas rotas
  const { userId } = route.params || {};

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDadosUsuario() {
      if (userId) {
        try {
          const dados = await buscarUsuarioPorId(userId);
          setUsuario(dados);
        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }

    carregarDadosUsuario();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0284C7" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Perfil</Text>
      <Text style={styles.subtitulo}>Informações da sua conta</Text>

      {usuario ? (
        <View style={styles.card}>
          <Text style={styles.textoCard}>**Nome:** {usuario.nome}</Text>
          <Text style={styles.textoCard}>**E-mail:** {usuario.email}</Text>
          <Text style={styles.textoCard}>**Idade:** {usuario.idade} anos</Text>
          <Text style={styles.textoCard}>**Peso:** {usuario.peso} kg</Text>
          <Text style={styles.textoCard}>**Cadastrado em:** {usuario.criado_em}</Text>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.textoCard}>Nenhum usuário encontrado.</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => alert('Botão de ação clicado!')}
      >
        <Text style={styles.textoBotao}>EDITAR PERFIL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 24,
  },
  textoCard: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 24,
  },
  botao: {
    height: 48,
    backgroundColor: '#0284C7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});