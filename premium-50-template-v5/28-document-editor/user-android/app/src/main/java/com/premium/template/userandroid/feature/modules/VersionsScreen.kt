package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun VersionsScreen(onCreate:()->Unit){Card{Column{Text("Versions");Text("Domain-specific versions workflow");Button(onClick=onCreate){Text("Create")}}}}
