package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AlbumsScreen(onCreate:()->Unit){Card{Column{Text("Albums");Text("Domain-specific albums workflow");Button(onClick=onCreate){Text("Create")}}}}
