package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PlaylistsScreen(onCreate:()->Unit){Card{Column{Text("Playlists");Text("Domain-specific playlists workflow");Button(onClick=onCreate){Text("Create")}}}}
