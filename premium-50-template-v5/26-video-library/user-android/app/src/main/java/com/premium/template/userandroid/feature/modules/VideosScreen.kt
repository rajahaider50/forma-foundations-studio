package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun VideosScreen(onCreate:()->Unit){Card{Column{Text("Videos");Text("Domain-specific videos workflow");Button(onClick=onCreate){Text("Create")}}}}
