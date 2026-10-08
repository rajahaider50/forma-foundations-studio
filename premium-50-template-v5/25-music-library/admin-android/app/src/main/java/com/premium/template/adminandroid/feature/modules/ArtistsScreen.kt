package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ArtistsScreen(onCreate:()->Unit){Card{Column{Text("Artists");Text("Domain-specific artists workflow");Button(onClick=onCreate){Text("Create")}}}}
