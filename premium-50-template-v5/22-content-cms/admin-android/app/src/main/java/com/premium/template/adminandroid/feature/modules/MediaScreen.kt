package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun MediaScreen(onCreate:()->Unit){Card{Column{Text("Media");Text("Domain-specific media workflow");Button(onClick=onCreate){Text("Create")}}}}
