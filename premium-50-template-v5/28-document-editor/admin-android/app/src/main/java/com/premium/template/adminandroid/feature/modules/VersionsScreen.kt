package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun VersionsScreen(onCreate:()->Unit){Card{Column{Text("Versions");Text("Domain-specific versions workflow");Button(onClick=onCreate){Text("Create")}}}}
