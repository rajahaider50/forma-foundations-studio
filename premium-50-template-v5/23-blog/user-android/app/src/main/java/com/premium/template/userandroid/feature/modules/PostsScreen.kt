package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PostsScreen(onCreate:()->Unit){Card{Column{Text("Posts");Text("Domain-specific posts workflow");Button(onClick=onCreate){Text("Create")}}}}
