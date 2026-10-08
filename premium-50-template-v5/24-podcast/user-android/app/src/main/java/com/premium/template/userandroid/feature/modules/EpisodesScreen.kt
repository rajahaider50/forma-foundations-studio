package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun EpisodesScreen(onCreate:()->Unit){Card{Column{Text("Episodes");Text("Domain-specific episodes workflow");Button(onClick=onCreate){Text("Create")}}}}
